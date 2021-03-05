import React from 'react';
import styles from './Header.module.sass';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import CONSTANTS from '../../constants';
import {getUserAction, clearUserStore, headerRequest} from '../../actions/actionCreator';
import Logo from './../Logo';


class Header extends React.Component{
  componentDidMount () {
    if ( !this.props.data) {
      this.props.getUser();
    }
  }

  logOut = () => {
    localStorage.clear();
    this.props.clearUserStore();
    this.props.history.replace('/login');
  };

    startContests = () => {
        this.props.history.push('/startContest');
    };
    renderLoginButtons = () => {
        if (this.props.data) {
            return (
                <>
                    <div className={styles.userInfo}>
                        <img
                            src={this.props.data.avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${this.props.data.avatar}`}
                            alt='user'/>
                        <span>{`Hi, ${this.props.data.displayName}`}</span>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt='menu'/>
                        <ul>
                            <li><Link to='/dashboard'
                                      style={{textDecoration: 'none'}}><span>View Dashboard</span></Link></li>
                            <li><Link to='/account' style={{textDecoration: 'none'}}><span>My Account</span></Link></li>
                            <li><Link to='/transactions' style={{textDecoration: 'none'}}><span>My Transactions</span></Link></li>
                            <li><Link to='/'
                                      style={{textDecoration: 'none'}}><span>Messages</span></Link></li>
                            <li><Link to='/dashboard' style={{textDecoration: 'none'}}><span>Affiliate Dashboard</span></Link>
                            </li>
                            <li><Link to='#' onClick={this.logOut} style={{textDecoration: 'none'}}><span>Logout</span></Link></li>
                        </ul>
                    </div>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt='email'/>
                </>
            )
        } else {
            return (
                <>
                    <Link to='/login' style={{textDecoration: 'none'}}><span className={styles.btn}>LOGIN</span></Link>
                    <Link to='/registration' style={{textDecoration: 'none'}}><span
                        className={styles.btn}>SIGN UP</span></Link>
                </>
            )
        }
    };

    render() {
        if (this.props.isFetching) {
            return null;
        }
        return (
            <div className={styles.headerContainer}>
                <div className={styles.fixedHeader}>
                    <a href="../../">Read Announcement</a>
                </div>
                <div className={styles.loginSignnUpHeaders}>
                    <div className={styles.numberContainer}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt='phone'/>
                        <a href={`tel:${CONSTANTS.CONTACT_US.PHONE}`}>{CONSTANTS.CONTACT_US.PHONE}</a>
                    </div>
                    <div className={styles.userButtonsContainer}>
                        {this.renderLoginButtons()}
                    </div>
                </div>
                <div className={styles.navContainer}>
                    <Logo/>
                    <div className={styles.leftNav}>
                        <div className={styles.nav}>
                            <ul>
                                <li>
                                    <span>NAME IDEAS</span><img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                                                                alt='menu'/>
                                    <ul>
                                        <li><a href="../../">Beauty</a></li>
                                        <li><a href="../../">Consulting</a></li>
                                        <li><a href="../../">E-Commerce</a></li>
                                        <li><a href="../../">Fashion & Clothing</a></li>
                                        <li><a href="../../">Finance</a></li>
                                        <li><a href="../../">Real Estate</a></li>
                                        <li><a href="../../">Tech</a></li>
                                        <li className={styles.last}><a href="../../">More Categories</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>CONTESTS</span><img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                                                              alt='menu'/>
                                    <ul>
                                        <li><a href="../../">HOW IT WORKS</a></li>
                                        <li><a href="../../">PRICING</a></li>
                                        <li><a href="../../">AGENCY SERVICE</a></li>
                                        <li><a href="../../">ACTIVE CONTESTS</a></li>
                                        <li><a href="../../">WINNERS</a></li>
                                        <li><a href="../../">LEADERBOARD</a></li>
                                        <li className={styles.last}><a href="../../">BECOME A
                                            CREATIVE</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Our Work</span><img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                                                              alt='menu'/>
                                    <ul>
                                        <li><a href="../../">NAMES</a></li>
                                        <li><a href="../../">TAGLINES</a></li>
                                        <li><a href="../../">LOGOS</a></li>
                                        <li className={styles.last}><a href="../../">TESTIMONIALS</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Names For Sale</span>
                                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt='menu'/>
                                    <ul>
                                        <li><a href="../../">POPULAR NAMES</a></li>
                                        <li><a href="../../">SHORT NAMES</a></li>
                                        <li><a href="../../">INTRIGUING NAMES</a></li>
                                        <li><a href="../../">NAMES BY CATEGORY</a></li>
                                        <li><a href="../../">VISUAL NAME SEARCH</a></li>
                                        <li className={styles.last}><a href="../../">SELL YOUR
                                            DOMAINS</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Blog</span><img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                                                          alt='menu'/>
                                    <ul>
                                        <li><a href="../../">ULTIMATE NAMING GUIDE</a></li>
                                        <li><a href="../../">POETIC DEVICES IN BUSINESS NAMING</a></li>
                                        <li><a href="../../">CROWDED BAR THEORY</a></li>
                                        <li className={styles.last}><a href="../../">ALL ARTICLES</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {this.props.data && this.props.data.role !== CONSTANTS.CREATOR &&
                        <div className={styles.startContestBtn} onClick={this.startContests}>START CONTEST</div>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return state.userStore;
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(headerRequest()),
    clearUserStore: () => dispatch(clearUserStore()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));