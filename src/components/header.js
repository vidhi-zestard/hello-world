import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

//import { removePre } from './../util/common';
//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';

const Header = () =>  {
    const data = useStaticQuery(graphql`
    {
      allWordpressMenusMenusItems {
        nodes {
          name
          items {
            title
            slug
            child_items {
              title
              slug
            }
          }
        }
      }    
      allWordpressAcfOptions {
            nodes {
            options {
                header_logo {
                source_url
                }
            }
            }
        }
    }
  `)

  const about = data.allWordpressMenusMenusItems.nodes[0].items[0];
  const contact = data.allWordpressMenusMenusItems.nodes[0].items[1];
  const services = data.allWordpressMenusMenusItems.nodes[0].items[2];
  const maintain = data.allWordpressMenusMenusItems.nodes[0].items[2].child_items[0];
  const make = data.allWordpressMenusMenusItems.nodes[0].items[2].child_items[1];
  const market = data.allWordpressMenusMenusItems.nodes[0].items[2].child_items[2];
 
  const headerdata = data.allWordpressAcfOptions.nodes[0].options;

   return(
    <header>
    <div className="header-main">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-md-2">
                  <Link to="/" className="dark-logo"><img src={headerdata.header_logo.source_url} alt="dark-logo" /></Link>
                </div>
                <div className="col-md-10">
                    <div className="menu-block text-center ">
                        <ul>
                        <li>
                        <Link to={about.slug} className="main-menu-git">{about.title}</Link>
                        </li>
                        <li>
                        <Link to={contact.slug} className="main-menu-git">{contact.title}</Link>
                        </li>
                        <li>
                        <Link to={services.slug} className="main-menu-git">{services.title}</Link>
                              <ul>
                              <li>
                              <Link to={services.slug + '/' + maintain.slug} className="main-menu-git">{maintain.title}</Link>
                              </li>
                              <li>
                              <Link to={services.slug + '/' + make.slug} className="main-menu-git">{make.title}</Link>
                              </li>
                               <li>
                              <Link to={services.slug + '/' + market.slug} className="main-menu-git">{market.title}</Link>
                              </li>
                              </ul>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </header>
   )
}

export default Header