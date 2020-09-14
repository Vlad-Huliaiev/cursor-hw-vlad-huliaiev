import React, { Component }  from 'react';


const Skeleton = (props) => {
    return (
            <div class="twit_box" >
                <div class="twit_box_cap" >
                    <div class="twit_box_cap_photo">
                        <img src={props.photo}/>
                    </div>
                    <div class="twit_box_cap_name">
                        <h5>{props.name}<span>
                        <img src={props.tick}/></span></h5>
                        <div class="twit_box_cap_status">
                            <span>{props.nickname}  •{props.date}</span>
                        </div>
                    </div>
                    <div class="twit_box_cap_text">
                       <span>{props.content}</span>
                    </div>
                </div>
                <div class="twit_box_container">
                    <img src={props.image}/>
                </div>
            </div>
    );
}
export default Skeleton;