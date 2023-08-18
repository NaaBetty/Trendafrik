import React, {FormEvent, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import PhotoPreviewer from '../components/PicsView';
import { toast } from 'react-hot-toast';




interface FormData {
    post_type: string,
    tagged_friends: (number | null)[],
    category: string;
    name: string;
    biography: string;
    impact: string;
    notify_nominee: string;
    add_project: string;
    project: string;
    user_status: string;
    privacy: number;
}

function CreatePostPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState<FormData>({
        post_type: 'activity_post',
        tagged_friends: [null],
        category: 'Academic leader',
        name: '',
        biography: '',
        impact: '',
        notify_nominee: 'no',
        add_project: 'no',
        project: '',
        user_status: '',
        privacy: 4,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const navigate = useNavigate();

        //validations
        if (!validateForm()) {
            return;
        }


      async function submitFormData(formData:FormData) { 
            try {
                // Performing API call to submit the post data
                const response = await fetch('https://www.buzsquare.com/api/v1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                });
            
                if (response.ok) {
                    // Clearing the form data after successful submission
                    setFormData({
                    post_type: 'activity_post',
                    tagged_friends: [null],
                    category: 'Academic leader',
                    name: '',
                    biography: '',
                    impact: '',
                    notify_nominee: 'no',
                    add_project: 'no',
                    project: '',
                    user_status: '',
                    privacy: 4,
                    });
                        toast.success('Post submitted successfully');
                        navigate('/post');
                }else {
                    toast.error('Error submitting the post');
                }
            } catch(error){
                toast.error('404 error while submiting')
            }
        }
    function validateForm(): boolean {
        if (!formData.name) {
          toast.error('Name field is required');
          return false;
        }
      
        if (!formData.impact) {
          toast.error('Impact field is required');
          return false;
        }
      
        if (!formData.biography) {
          toast.error("Biography field is required");
          return false;
        }
      
        if (formData.add_project === "yes" && !formData.project.trim()) {
          toast.error("Project field is required when add project is 'yes'.");
          return false;
        }
        return true;
      }

      function handleSubmit(event: FormEvent<HTMLFormElement>): void {
         event.preventDefault(); // Prevent the default form submission
         if (validateForm()) {
            submitFormData(formData);
               }
          }

    return <>
        <div className="pb-3">
            <NavLink to="/" className="rounded-pill text-decoration-none">
                <BsFillArrowLeftCircleFill/><BsFillArrowLeftCircleFill/> <span className="text-black">Honours/Gratitude</span>
            </NavLink>
        </div>
        
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Privacy</label>
                <select className="form-select" value="4" aria-label="Default select example"
                        name="privacy"
                        onChange={handleChange}>
                    <option value="0">Public</option>
                    <option value="1">Community</option>
                    <option value="2">Friends</option>
                    <option value="3">Friends of Friends</option>
                    <option value="4">Only Me</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select className="form-select" value="Academic leader" aria-label="Default select example"
                        name="category"
                        onChange={handleChange}>
                    
                    <option value="Academic leader">Academic leader</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp"
                       required onChange={handleChange}/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="biography" className="form-label">Nominee's biography</label>
                <textarea className="form-control" id="biography" name="biography" onChange={handleChange}
                          required></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="impact" className="form-label">Nominee's impact</label>
                <textarea className="form-control" id="impact" name="impact" onChange={handleChange}
                          required></textarea>
            </div>
            
            <div className="row mb-3">
                <div className="col">Add project:</div>
                <div className="col form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="add_project" id="add-project"
                           value="yes" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="add-project">Yes</label>
                </div>
                <div className="col form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="add_project" id="do-not-add-project"
                           value="no" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="do-not-add-project">No</label>
                </div>
            </div>
            <PhotoPreviewer setSelectedFile={setSelectedFile}/>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    </>;

    }
export default CreatePostPage;
