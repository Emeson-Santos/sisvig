import { Link } from 'react-router-dom';
import 'react-ionicons';
import { ChatbubbleOutline, Help, Home, LockClosed, LogoApple, LogOutOutline, MenuOutline, PeopleOutline, SearchOutline, Settings } from 'react-ionicons';
import './header.css';
import Usuario from '../../assets/avatar.png';

export default function Header() {

    // add hovered class is selected list item

    //MenuToggle
    // let toggle = document.querySelector('.toggle');
    // let navgation = document.querySelector('.navgation');
    // let main = document.querySelector('.main');

    // toggle.onclick = function(){
    //     navgation.classList.toggle('active');
    // } 
    // function active(){
    //     navgation.classList.toggle('active')
    // }

    // let list = document.querySelectorAll('.navgation li');

    // function activeLink() {
    //     list.forEach((item) => item.classList.remove('hovered')
    //     );
    //     this.classList.add('hovered')       
    // }

    // list.forEach((item) => item.classList.addEventListener('mouseover', activeLink));


    return (
        <header>
            <div className="container">
                <div className="navgation">
                    <ul>
                        <li>
                            <a href="#">
                                <span className="icon"><LogoApple className="ion-icon" color='#fff'></LogoApple></span>
                                <span className="title">Brand Name</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="icon"><Home className="ion-icon" color='#fff'></Home></span>
                                <span className="title">Dashboar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ocorrencia">
                                <span className="icon"><Home className="ion-icon" color='#fff'></Home></span>
                                <span className="title">Ocorrêcia</span>
                            </a>
                        </li>
                        <li>
                            <a href="/calendario">
                                <span className="icon"><Home className="ion-icon" color='#fff'></Home></span>
                                <span className="title">Calendario</span>
                            </a>
                        </li>
                        <li>
                            <a href="/relatorios">
                                <span className="icon"><Home className="ion-icon" color='#fff'></Home></span>
                                <span className="title">Relatórios</span>
                            </a>
                        </li>
                        <li>
                            <a href="/reciclagem">
                                <span className="icon"><Home className="ion-icon" color='#fff'></Home></span>
                                <span className="title">Reciclagem</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ferias">
                                <span className="icon"><Home className="ion-icon" color='#fff'></Home></span>
                                <span className="title">Férias</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><PeopleOutline className="ion-icon" color='#fff'></PeopleOutline></span>
                                <span className="title">Custumers</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><ChatbubbleOutline className="ion-icon" color='#fff'></ChatbubbleOutline></span>
                                <span className="title">Message</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><Help className="ion-icon" color='#fff'></Help></span>
                                <span className="title">Help</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><Settings className="ion-icon" color='#fff'></Settings></span>
                                <span className="title">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><LockClosed className="ion-icon" color='#fff'></LockClosed></span>
                                <span className="title">Password</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><LogOutOutline className="ion-icon" color='#fff'></LogOutOutline></span>
                                <span className="title">Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="main">
                    <div className="topbar">
                        <div className="toggle">
                            <MenuOutline></MenuOutline>
                        </div>
                        {/* Search */}
                        <div className="Search">
                            <label>
                                <input type="text" placeholder="Search here" />
                                <SearchOutline className="ion-icon"></SearchOutline>
                            </label>
                        </div>
                        {/* User */}
                        <div className="user">
                            <img src={Usuario} alt="" />
                        </div>
                    </div>

                </div>
            </div>


        </header>
    )
}