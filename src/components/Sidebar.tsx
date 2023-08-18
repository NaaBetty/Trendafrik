import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
    return <>
        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3 ltr-mz98es" data-testid="layoutSlotSide">
            <div className="MuiBox-root ltr-sjqu1n">
                <div>
                    <div className="MuiBox-root ltr-pa7xi5"
                         style={{"position": "fixed", "width": "322px", "top": "8px", "bottom": "0px"}}>
                        <div className="Scrollbar-container ltr-ynkcy4">
                            <div style={{"marginBottom": "0px"}} className="Scrollbar-view ltr-19mtssx">
                                <div className="MuiBox-root ltr-dmpd08" data-testid="blockSidebarMenu">
                                    <div className="MuiBox-root ltr-1y2qgef">
                                        <nav role="navigation">
                                            <div className="jss112 jss111" role="menu">
                                                <div className="jss113 jss118" role="menuitem" data-testid="Home"><a
                                                    className="jss114" href="/"><span
                                                    className="jss117 ico ico-home-alt ltr-171g39w"></span>
                                                    <div className="jss115"><span>Home</span></div>
                                                </a></div>
                                                <div className="jss113" role="menuitem" data-testid="Friends"><a
                                                    className="jss114" href="/friend"><span
                                                    className="jss117 ico ico-user1-two ltr-171g39w"></span>
                                                    <div className="jss115"><span>Friends</span></div>
                                                </a></div>
                                                <div className="jss113" role="menuitem" data-testid="Members"><a
                                                    className="jss114" href="/user"><span
                                                    className="jss117 ico ico-user1-three ltr-171g39w"></span>
                                                    <div className="jss115"><span>Members</span></div>
                                                </a></div>
                                                <div className="jss113" role="menuitem" data-testid="Messages"><a
                                                    className="jss114" href="/messages"><span
                                                    className="jss117 ico ico-comments ltr-171g39w"></span>
                                                    <div className="jss115"><span>Messages</span></div>
                                                </a></div>
                                                <div className="jss113" role="menuitem" data-testid="Groups"><a
                                                    className="jss114" href="/group"><span
                                                    className="jss117 ico ico-user3-three ltr-171g39w"></span>
                                                    <div className="jss115"><span>Groups</span></div>
                                                </a></div>
                                                <div className="jss113" role="menuitem" data-testid="Pages"><a
                                                    className="jss114" href="/page"><span
                                                    className="jss117 ico ico-flag-waving ltr-171g39w"></span>
                                                    <div className="jss115"><span>Pages</span></div>
                                                </a></div>
                                                <div className="jss113" role="menuitem" data-testid="Photos"><a
                                                    className="jss114" href="/photo"><span
                                                    className="jss117 ico ico-photos-alt ltr-171g39w"></span>
                                                    <div className="jss115"><span>Photos</span></div>
                                                </a></div>
                                                <div className="jss113" role="menuitem" data-testid="Videos"><a
                                                    className="jss114" href="/video"><span
                                                    className="jss117 ico ico-video-player ltr-171g39w"></span>
                                                    <div className="jss115"><span>Videos</span></div>
                                                </a></div>
                                                <div className="jss113" role="menuitem" data-testid="more"><a
                                                    className="jss114"><span
                                                    className="jss117 ico ico-angle-down ltr-171g39w"></span>
                                                    <div className="jss115"><span>More</span></div>
                                                </a></div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="MuiBox-root ltr-103hpvq">
                                    <div className="MuiBox-root ltr-1y2qgef">
                                        <hr className="MuiDivider-root MuiDivider-middle ltr-c9mssq"/>
                                    </div>
                                </div>
                            </div>
                            <div style={{"display": "none"}} className="ltr-t705nc">
                                <div className="ltr-lqnzbo"></div>
                            </div>
                            <div style={{"display": "none"}} className="ltr-1ctarb2">
                                <div className="ltr-1hmv8ec"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}