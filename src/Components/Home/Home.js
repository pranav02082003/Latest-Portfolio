import React from 'react'
import '../Home/Home.css'
import Type from './Type'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt';
import Header from '../Header/Header'

export default function Home() {
    return (
        <div>
            <Header />
            <div>
                <div className='heading-home'>
                    <h1>Hi There!</h1>
                    <div className='typewriter-name'>
                        <Type />
                    </div>
                </div>
                <div className='d-flex bottom-content'>
                    <div className='first-div card box-shadow'>
                        <h3 className='main-content card-text '>LET ME <span className='yellow'>INTRODUCE </span> MYSELF</h3>
                        <div>
                            <p className='card-text content'>Passionate and energetic <span className='yellow'>final-year B-Tech Computer Science student</span>. Quick to grasp new concepts and apply them
                                effectively.</p> <p className='card-text content' ><span className='yellow'>Strong problem-solving skills</span> and analytical skills, complemented by excellent teamwork and communication
                                abilities.</p><p className='card-text content'>Seeking opportunities to enhance skills and <span className='yellow'>contribute to impactful projects</span> in the tech industry</p>
                        </div>
                    </div>
                    <div className='image'>
                        <Tilt>
                            <img src={myImg} alt='avatar' />
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    )
}

// {/* <div class="col-md-4">
//               <div class="card mb-4 box-shadow">
//                 <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1941359bda5%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1941359bda5%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.828125%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="height: 225px; width: 100%; display: block;">
//                 <div class="card-body">
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <div class="d-flex justify-content-between align-items-center">
//                     <div class="btn-group">
//                       <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//                       <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//                     </div>
//                     <small class="text-muted">9 mins</small>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
