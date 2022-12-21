import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import mic from '../assests/mic.png';
import anime from '../assests/anime.png';
import comp from '../assests/comp.png';
import { toast } from 'react-hot-toast';
import Footer from '../components/Footer';
function LandingPage(props) {
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const signUp=()=>{
        navigate('/register')
    }
    const handleEmail=async(e)=>{
        e.preventDefault();
        try {
            window.location.href=`mailto:imranmat254@gmail.com?subject=Message from ${name} ${email}&body=${message}`
        } catch (error) {
            toast.error('Message not sent!')
        }
    }
    const showMenu=()=>{
        document.querySelector('.menu-bg').style.display='block';
    }
    const closeMenu=()=>{
        document.querySelector('.menu-bg').style.display='none';
    }
    const toGuide=()=>{
        navigate('/guide')
    }
    return (
        <div className='land-page'>
            <div className='hero-image'>
                <nav className='nav'>
                    <div className='nav-item logo'><h1>Follow Up🐌</h1></div>
                    <ul role='navigation'>
                        <div className='nav-item'>
                            <Link to='/login'>Login</Link>
                            <button onClick={signUp}>Sign Up</button>
                        </div>
                        <button className='menu' onClick={showMenu}>Menu</button>
                    </ul>
                    <div className='menu-bg' onClick={closeMenu}>
                        <div className='menu-list'>
                            <button onClick={closeMenu}>Close</button>
                            <ul>
                                <li><Link to='/login' onClick={closeMenu}>Login</Link></li>
                                <li><Link to='/register' onClick={closeMenu}>Sign Up</Link></li>
                                <li><Link to='/guide' onClick={closeMenu}>Guide lines</Link></li>
                            </ul>
                        </div>
                    </div>

                </nav>

                <div className='content'>
                    <h1><span>Connect</span> <span>with</span> <span className='orange'>different</span> <span>people</span></h1>
                    <p>Essentially, This platform connects people and enable them to chat via voice messages</p>
                    <button onClick={toGuide}>Get Started</button>
                </div>
            </div>

            <section className='enjoy-connection'>
                <article>
                    <img src={mic}/>
                </article>
                <article>
                    <h2>Enjoy while networking</h2>
                    <p>By signing up, you will get instant connections to over 50,000 people using this platform. In here, you will be able to network 
                        and know different people. You can refer your friends to this platform via your referral link,
                         share out your profile to different people so as to gain fame.<br/>
                        <Link to='/guide'>Learn more</Link>
                    </p>
                </article>
            </section>

            <section className='share-voice'>
                <article>
                    <h2>Share voice messages</h2>
                    <p>The primarial use of this platform is to send voice messages to a large audience.
                        The people receiving the messages might be potential buyers, friends, investors or work collegues. <br/>
                        <Link to='/guide'>Learn more</Link>
                    </p>
                </article>
                <article>
                    <img src={comp}/>
                </article>
            </section>

            <h1 className='testimonials-header'>testimonials</h1>
            <div className='testimonials'>
                <div className='card'>
                    <img src={mic} alt='..'/>
                    <p>
                        Hello, I have been using this platform for about six months now. I would say it's a good
                        platform in cases where you would like to chat with new people.
                        But it's good😍.
                    </p>
                    <div className='card-footer'>
                        <h3>Lilian</h3> <Link to='/'>Visit my profile</Link>
                    </div>
                </div>
                <div className='card'>
                    <img src={mic} alt='..'/>
                    <p>
                        Hello, I have been using this platform for about six months now. I would say it's a good
                        platform in cases where you would like to chat with new people.
                        But it's good😍.
                    </p>
                    <div className='card-footer'>
                        <h3>Lilian</h3> <Link to='/'>Visit my profile</Link>
                    </div>
                </div>
                <div className='card'>
                    <img src={mic} alt='..'/>
                    <p>
                        Hello, I have been using this platform for about six months now. I would say it's a good
                        platform in cases where you would like to chat with new people.
                        But it's good😍.
                    </p>
                    <div className='card-footer'>
                        <h3>Lilian</h3> <Link to='/'>Visit my profile</Link>
                    </div>
                </div>
                <div className='card'>
                    <img src={anime} alt='..'/>
                    <p>
                        Hello, I have been using this platform for about six months now. I would say it's a good
                        platform in cases where you would like to chat with new people.
                        But it's good😍.
                    </p>
                    <div className='card-footer'>
                        <h3>Lilian</h3> <Link to='/'>Visit my profile</Link>
                    </div>
                </div>
            </div>

            <h1 className='testimonials-header'>Talk to Us</h1>
            <div className='talk-to-us'>
                <div className='content'>
                    <h2>Send us an email</h2>
                    <p>If you face any technical issue, contact us by filling the form and submitting.</p>
                    <h2>For Business talks</h2>
                    <p>Contact us, if you are a client looking for a web developer to hire, for your business, organization or a social website.</p>
                </div>
                <form onSubmit={handleEmail}>
                    <label>Name</label>
                    <input type='text' placeholder='John' onChange={e=>setName(e.target.value)} required/>
                    <label>Email</label>
                    <input type='email' placeholder='john@gmail.com' onChange={e=>setEmail(e.target.value)} required/>
                    <label>Message</label>
                    <textarea autoCorrect='on' autoComplete="on" placeholder='Hello,..' onChange={e=>setMessage(e.target.value)} required></textarea>
                    <button>Submit</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;