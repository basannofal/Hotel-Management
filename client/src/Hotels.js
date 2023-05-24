import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Perhoteldata from './Perhoteldata';
import Pagination from './Pagination';





const Hotels = () => {
    

    

    const [getuserdata, setuserdata] = useState([])
    const [currentpage, setcurrentpage] = useState(1);
    const [postperpage, setpostperpage] = useState(10)

    // ********** work offline **********************//
    const getdata = async (e) => {

        const res = await fetch('/getdata', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        const data = await res.json();
        if (!data) {
            window.alert('error in get data')
        }
        else {
            setuserdata(data)
            console.log('data goted by api');
        }
    }

    //*************************** */ work offfline over************************
    useEffect(() => {
        getdata();
    }, [])


    // get current post 

    const indexOfLastPost = currentpage * postperpage;
    const indexOfFirstPost = indexOfLastPost - postperpage;
    const currentpost = getuserdata.slice(indexOfFirstPost, indexOfLastPost)


    // change page

    const paginate   = (pagenumber) => setcurrentpage(pagenumber)



    return (
        <>
        <div className='hotels_img'>
            
                <h1 className='hotel_imag_heading'>Valudas</h1>

                <p className="hotel_imag_para"> find best hotel and enjoy yourself</p>
{/* 
                
                <NavLink to={'/signup'}>  <div className="main_contabtn book-a-table-btn scrollto "> join us  </div></NavLink>
                <NavLink to={'/wellcome'}>   <div className="main_contabtn book-a-table-btn scrollto">joined</div></NavLink> */}

        </div>
     

            <div className="hotelmaindata">

        <div className='hoteldata'>

    
            <h2 class="text-capitalize our-hotel "  id="room">Our All Hotels</h2>
            



          

            <Perhoteldata getuserdata={currentpost}/>
            <Pagination postperpage={postperpage} totalpost={getuserdata.length} paginate={paginate} />

        </div>

            </div>
















            <section class="fullwidth">
    <div class="container">

      <div class="nav-scroller-wrapper">
  <nav class="nav-scroller">

    <div class="nav-scroller-content">
      <a href="#" class="nav-scroller-item">Chairs</a>
<a href="#" class="nav-scroller-item">Tables</a>
<a href="#" class="nav-scroller-item">Cookware</a>
<a href="#" class="nav-scroller-item">Beds</a>
<a href="#" class="nav-scroller-item">Desks</a>
<a href="#" class="nav-scroller-item">Flooring</a>
<a href="#" class="nav-scroller-item">Lighting</a>
<a href="#" class="nav-scroller-item">Mattresses</a>
<a href="#" class="nav-scroller-item">Solar Panels</a>
<a href="#" class="nav-scroller-item">Bookcases</a>
<a href="#" class="nav-scroller-item">Mirrors</a>
<a href="#" class="nav-scroller-item">Rugs</a>
<a href="#" class="nav-scroller-item">Curtains &amp; Blinds</a>
<a href="#" class="nav-scroller-item">Frames &amp; Pictures</a>
<a href="#" class="nav-scroller-item">Wardrobes</a>
<a href="#" class="nav-scroller-item">Storage</a>
<a href="#" class="nav-scroller-item">Decoration</a>
<a href="#" class="nav-scroller-item">Appliances</a>
<a href="#" class="nav-scroller-item">Racks</a>
<a href="#" class="nav-scroller-item">Worktops</a>
    </div>

  </nav>

  <button class="btn btn-sm btn-primary nav-scroller-btn nav-scroller-btn--left"><svg class="icon " width="21" height="32" viewBox="0 0 21 32">
<path d="M0 16l4.736-4.768 11.264-11.232 4.736 4.736-11.232 11.264 11.232 11.264-4.736 4.736-11.264-11.264z"></path></svg></button>
        
  <button class="btn btn-sm btn-primary nav-scroller-btn nav-scroller-btn--right"><svg class="icon "  width="21" height="32" viewBox="0 0 21 32"><path d="M0 27.264l11.264-11.264-11.264-11.264 4.736-4.736 11.264 11.232 4.736 4.768-16 16z"></path></svg></button>

</div>
</div>
</section>
        </>
    )
}

export default Hotels



// /**
//   Horizontal scrolling menu.

//   @param {Object} object - Container for all options.
//   @param {string || DOM node} wrapperSelector - Container element selector.
//   @param {string} selector - Scroller element selector.
//   @param {string} contentSelector - Scroller content element selector.
//   @param {string} buttonLeftSelector - Left button selector.
//   @param {string} buttonRightSelector - Right button selector.
//   @param {integer} scrollStep - Amount to scroll on button click.
// */


// const navScroller = function({
//     wrapperSelector: wrapperSelector = '.nav-scroller-wrapper',
//     selector: selector = '.nav-scroller',
//     contentSelector: contentSelector = '.nav-scroller-content',
//     buttonLeftSelector: buttonLeftSelector = '.nav-scroller-btn--left',
//     buttonRightSelector: buttonRightSelector = '.nav-scroller-btn--right',
//     scrollStep: scrollStep = 75
//   } = {}) {

//   let scrolling = false;
//   let scrollingDirection = '';
//   let scrollOverflow = '';
//   let timeout;

//   let navScrollerWrapper;

//   if (wrapperSelector.nodeType === 1) {
//     navScrollerWrapper = wrapperSelector;
//   }
//   else {
//     navScrollerWrapper = document.querySelector(wrapperSelector);
//   }
//   if (navScrollerWrapper === undefined || navScrollerWrapper === null) return;

//   let navScroller = navScrollerWrapper.querySelector(selector);
//   let navScrollerContent = navScrollerWrapper.querySelector(contentSelector);
//   let navScrollerLeft = navScrollerWrapper.querySelector(buttonLeftSelector);
//   let navScrollerRight = navScrollerWrapper.querySelector(buttonRightSelector);


//   // Sets overflow
//   const setOverflow = function() {
//     scrollOverflow = getOverflow(navScrollerContent, navScroller);
//     toggleButtons(scrollOverflow);
//   }


//   // Debounce setting the overflow with requestAnimationFrame
//   const requestSetOverflow = function() {
//     if (timeout) {
//       window.cancelAnimationFrame(timeout);
//     }

//     timeout = window.requestAnimationFrame(() => {
//       setOverflow();
//     });
//   }


//   // Get overflow value on scroller
//   const getOverflow = function(content, container) {
//     let containerMetrics = container.getBoundingClientRect();
//     let containerWidth = containerMetrics.width;
//     let containerMetricsLeft = Math.floor(containerMetrics.left);

//     let contentMetrics = content.getBoundingClientRect();
//     let contentMetricsRight = Math.floor(contentMetrics.right);
//     let contentMetricsLeft = Math.floor(contentMetrics.left);

//     // Offset the values by the left value of the container
//     let offset = containerMetricsLeft;
//     containerMetricsLeft -= offset;
//     contentMetricsRight -= offset + 1; // Due to an off by one bug in iOS
//     contentMetricsLeft -= offset;

//     // console.log (containerMetricsLeft, contentMetricsLeft, containerWidth, contentMetricsRight);

//     if (containerMetricsLeft > contentMetricsLeft && containerWidth < contentMetricsRight) {
//         return 'both';
//     } else if (contentMetricsLeft < containerMetricsLeft) {
//         return 'left';
//     } else if (contentMetricsRight > containerWidth) {
//         return 'right';
//     } else {
//         return 'none';
//     }
//   }


//   // Move the scroller with a transform
//   const moveScroller = function(direction) {
//     if (scrolling === true) return;

//     setOverflow();

//     let scrollDistance = scrollStep;
//     let scrollAvailable;


//     if (scrollOverflow === direction || scrollOverflow === 'both') {

//       if (direction === 'left') {
//         scrollAvailable = navScroller.scrollLeft;
//       }

//       if (direction === 'right') {
//         let navScrollerRightEdge = navScroller.getBoundingClientRect().right;
//         let navScrollerContentRightEdge = navScrollerContent.getBoundingClientRect().right;

//         scrollAvailable = Math.floor(navScrollerContentRightEdge - navScrollerRightEdge);
//       }

//       // If there is less that 1.5 steps available then scroll the full way
//       if (scrollAvailable < (scrollStep * 1.5)) {
//         scrollDistance = scrollAvailable;
//       }

//       if (direction === 'right') {
//         scrollDistance *= -1;
//       }

//       navScrollerContent.classList.remove('no-transition');
//       navScrollerContent.style.transform = 'translateX(' + scrollDistance + 'px)';

//       scrollingDirection = direction;
//       scrolling = true;
//     }

//   }


//   // Set the scroller position and removes transform, called after moveScroller()
//   const setScrollerPosition = function() {
//     var style = window.getComputedStyle(navScrollerContent, null);
//     var transform = style.getPropertyValue('transform');
//     var transformValue = Math.abs(parseInt(transform.split(',')[4]) || 0);

//     if (scrollingDirection === 'left') {
//       transformValue *= -1;
//     }

//     navScrollerContent.classList.add('no-transition');
//     navScrollerContent.style.transform = '';
//     navScroller.scrollLeft = navScroller.scrollLeft + transformValue;
//     navScrollerContent.classList.remove('no-transition');

//     scrolling = false;
//   }


//   // Toggle buttons depending on overflow
//   const toggleButtons = function(overflow) {
//     navScrollerLeft.classList.remove('active');
//     navScrollerRight.classList.remove('active');

//     if (overflow === 'both' || overflow === 'left') {
//       navScrollerLeft.classList.add('active');
//     }

//     if (overflow === 'both' || overflow === 'right') {
//       navScrollerRight.classList.add('active');
//     }
//   }


//   const init = function() {

//     // Determine scroll overflow
//     setOverflow();

//     // Scroll listener
//     navScroller.addEventListener('scroll', () => {
//       requestSetOverflow();
//     });

//     // Resize listener
//     window.addEventListener('resize', () => {
//       requestSetOverflow();
//     });

//     // Button listeners
//     navScrollerLeft.addEventListener('click', () => {
//       moveScroller('left');
//     });

//     navScrollerRight.addEventListener('click', () => {
//       moveScroller('right');
//     });

//     // Set scroller position
//     navScrollerContent.addEventListener('transitionend', () => {
//       setScrollerPosition();
//     });

//   };

//   // Init is called by default
//   init();


//   // Reveal API
//   return {
//     init
//   };
// };

// const navScrollerTest = navScroller();































































































































// <div class="about lobster-font-family">
// <div class="container " >
//     <h2 class="text-center text-capitalize">About Our All Hotels</h2>
//     <img src="imgs/shape.png" height="50vh"/>
//     <div class="row">
//         <div class="col-lg-6 col-12">
//             <h4>A best hotels to enjoy your life and spend your time</h4>
//             <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered </p>
//             <button><a href="#">Read more</a></button>
//         </div>
//         <div class="col-lg-6 col-12">
//             <div class="img"></div>
//         </div>
//     </div>

// </div>
// </div>



































{/* 
            {
                getuserdata.map((element, id) => {
                    return (<>

                        <ul>

                            <li class="card">
                                <span
                                    class="featured-image" >
                            <NavLink to={`/hoteldetail/${element._id}`} >
                                    <img src="./img/about.jpg" className='hoim' alt="" />
                                </NavLink>
                                </span>
                                <article class="card-body">
                                    <header>
                                       <NavLink to={`/hoteldetail/${element._id}`} >
                                           
                                            
                                                <h3 className='h-name'>{element.hname}</h3>
                                           
                                            <p class="meta">
                                                <span class="author h-detail">{element.honame}</span>
                                               
                                            </p>
                                            <p class="meta">
                                               
                                                <time class="updated h-detail" datetime="" itemprop="datePublished">{element.address}</time>
                                            </p>
                                            <p class="meta">
                                               
                                                <time class="updated h-detail" datetime="" itemprop="datePublished "> contact :-  {element.mobile}</time>
                                            </p>

                                         
                                            </NavLink>
                                    </header>
                                 
                                </article>
                            </li>

                        </ul>


                    </>)
                })
            } */}
































{/* <ul>

                <li class="card">
                    <a
                        href="#"
                        class="featured-image" >
                        <img src="./img/about.jpg" className='hoim' alt="" />
                    </a>
                    <article class="card-body">
                        <header>
                            <a href="utilidata-national-governors-association-meeting">
                                <span class="pre-heading">Blog</span>
                                <div class="title">
                                    <h3>Test this responsively to see the horizontal magik</h3>
                                </div>
                                <p class="meta">
                                    <span class="author">Utilidata</span>
                                    <span> | </span>
                                    <time class="updated" datetime="" itemprop="datePublished">July 27, 2017</time>
                                </p>
                            </a>
                        </header>
                        <div class="chips">
                            <a class="chip">Government</a>
                            <a class="chip">Test</a>
                            <a class="chip">Utilidata</a>
                        </div>
                    </article>
                </li>

            </ul> */}