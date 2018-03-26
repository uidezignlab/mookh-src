import React from 'react';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';

let Item = () => (
    <div className="item">
        <strong>Tickets</strong>
        <div className="item-content">
            <div className="item-img">
                <img src="https://raw.githubusercontent.com/uidezignlab/imagess/master/beast2.7018f7be.jpg" alt=""/>
                <div className="item-logo">
                    <img src="https://raw.githubusercontent.com/uidezignlab/imagess/master/avatar.7a6bc100.jpg" alt=""/>
                </div>
            </div>
            <div className="item-info">
                <div>
                    <h6><strong>TEDx Lavington women 2016 Nairobi x Edition</strong></h6>
                    <span>by TEDx Kenya</span>
                    <br/>
                    <strong>Friday 24th Nov - <small>3 days to go</small></strong>
                </div>
                <a href="#">Learn More <MdArrowForward /></a>
            </div>
        </div>
    </div>
);

export default Item;