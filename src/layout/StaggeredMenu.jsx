// import React, { useState, useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { NavLink } from 'react-router-dom';

// const StaggeredMenu = ({ items = [], socialItems = [] }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     // Initial state: menu hidden off-screen
//     gsap.set(menuRef.current, { xPercent: 100 });
//   }, []);

//   const toggleMenu = () => {
//     const opening = !isOpen;
//     setIsOpen(opening);

//     if (opening) {
//       // Open Animation
//       gsap.to(menuRef.current, { xPercent: 0, duration: 0.6, ease: 'power4.out' });
//       gsap.fromTo(itemsRef.current, 
//         { y: 50, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.2 }
//       );
//     } else {
//       // Close Animation
//       gsap.to(menuRef.current, { xPercent: 100, duration: 0.4, ease: 'power2.in' });
//     }
//   };

//   return (
//     <>
//       <button className="menu-toggle" onClick={toggleMenu}>
//         {isOpen ? 'CLOSE' : 'MENU'}
//       </button>

//       <aside ref={menuRef} className="menu-panel">
//         <nav className="menu-nav">
//           {items.map((item, i) => (
//             // <a 
//             //   key={i} 
//             //   href={item.link} 
//             //   ref={el => itemsRef.current[i] = el}
//             //   className="menu-link"
//             // >
//             //   {item.label}
//             // </a>
//              <NavLink key={item.link} to={item.link} className="menu-link">
//             {item.label}
//           </NavLink>
//           ))}
//         </nav>
        
//         <div className="menu-socials">
//           {socialItems.map((s, i) => (
//             <a key={i} href={s.link} className="social-link">{s.label}</a>
//           ))}
//         </div>
//       </aside>
//     </>
//   );
// };

// export default StaggeredMenu;









// ====================
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';

const StaggeredMenu = ({ items = [], socialItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.set(menuRef.current, { xPercent: 100 });
  }, []);

  // We logic-wrap the toggle so it can be called from the button OR the links
  const toggleMenu = () => {
    const opening = !isOpen;
    setIsOpen(opening);

    if (opening) {
      gsap.to(menuRef.current, { xPercent: 0, duration: 0.6, ease: 'power4.out' });
      gsap.fromTo(itemsRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.2 }
      );
    } else {
      gsap.to(menuRef.current, { xPercent: 100, duration: 0.4, ease: 'power2.in' });
    }
  };

  // Function specifically to close the menu when a link is clicked
  const handleLinkClick = () => {
    if (isOpen) toggleMenu();
  };

  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? 'CLOSE' : 'MENU'}
      </button>

      <aside ref={menuRef} className="menu-panel">
        <nav className="menu-nav">
          {items.map((item, i) => (
            <NavLink 
              key={item.link} 
              to={item.link} 
              // 1. Pass the ref for GSAP animation
              ref={el => itemsRef.current[i] = el}
              // 2. Close menu on click
              onClick={handleLinkClick}
              // 3. Keep your styling logic
              className={({ isActive }) => 
                `menu-link ${isActive ? "active-link" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        
        <div className="menu-socials">
          {socialItems.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noreferrer" className="social-link">
              {s.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default StaggeredMenu;