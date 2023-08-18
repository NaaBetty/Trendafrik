import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import 'bootstrap/dist/css/bootstrap.min.css';

interface PicsVieweProps {
    setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>
}

const PhotoPreviewer = ({setSelectedFile}: PicsVieweProps) => {
    const [previewFile, setPreviewFile] = useState<string | null>(null);
    const handleRemovePhoto = (event: React.MouseEvent) => {
        event.stopPropagation()
        setPreviewFile(null);
    }

    const onDrop = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file || !file.type.startsWith('image/')) {
            alert('File not supported')
            console.log('Invalid image')
            return
        }

        setSelectedFile(file);

        const reader = new FileReader();

        reader.onload = () => {
            setPreviewFile(reader.result as string);
        };

        reader.readAsDataURL(file);
    };

    const {getRootProps, getInputProps} = useDropzone({
        onDrop, multiple: false, accept: {
            'image/jpeg': [],
            'image/png': []
        }
    });
    return (
        <div className="photo-previewer my-4 border-dark-subtle border-2 py-3">
            <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                {previewFile ? (
                    <div className="position-relative">
                        <img src={previewFile} alt="Preview" className="preview-image w-100"/>
                        <span onClick={handleRemovePhoto}
                            style={{cursor: "default"}}
                            title="Remove"
                            className="fw-bold fs-3 position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle">
                            &times;
                            <span className="visually-hidden">Remove photo</span>
                        </span>

                    </div>
                ) : (
                    <button className="btn btn-light" title="Drop photo or click to select" style={{cursor: "pointer"}}>
                        Add photo
                    </button>
                )}
            </div>
        </div>
    );
};

export default PhotoPreviewer;