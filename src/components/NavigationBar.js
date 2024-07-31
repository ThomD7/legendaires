import React, { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Cross } from 'hamburger-react';
import { routes } from '../routes.js';
import { motion, AnimatePresence } from 'framer-motion';
import { getClan } from '../services/clanService.js';
import Titres from './Titres.js';
import { Link, useNavigate } from 'react-router-dom';
import { clanName } from '../config.js';
import lang from '../lang.json';

function NavigationBar() {
  const [logo, setLogo] = useState();

  useEffect(() => {
    let data = getClan("#2LL0J9JLY");
    data.then((result) => {
      setLogo(result.badgeUrls.medium);
    });
  }, []);

  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  const navigate = useNavigate();

  const handleMembresClick = () => {
    navigate(routes[1].href);
    setOpen(false);
  };

  const handleTest = () => {
    navigate(routes[2].href)
  }
  return (
    <div>
      <div className="lg:hidden">
        <div ref={ref} className="relative">
          <div className="flex justify-between items-center p-4">
            <div className='flex items-center'>
              <Link to="/" className='flex items-center'>
                <img src={logo} alt={lang.header.logoAlt} className="w-20 h-20" />
                <div>
                  <Titres texte={clanName} className="-my-2"/>
                </div>
              </Link>
            </div>
            <div className="ml-auto">
              <Cross label={lang.header.crossLabel} toggled={isOpen} rounded size={30} toggle={setOpen} easing="ease-in" />
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 fixed left-0 shadow-4xl right-0 top-[9.5rem] p-5 pt-0"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <ul className="grid gap-2 mt-5">
                  {routes.map((route) => (
                    <motion.li
                      key={route.title}
                      variants={itemVariants}
                      className="w-full"
                    >
                      <a
                        onClick={route.title === routes[1].title ? handleMembresClick : () => setOpen(false)}
                        className="flex items-center justify-between w-full p-5 text-white"
                        href={route.title === routes[1].title ? undefined : route.href}
                      >
                        <div className="flex m-auto gap-1 font-bold text-2xl">
                          {route.title}
                        </div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center p-4">
        <div className='flex items-center'>
          <Link to="/" className='flex items-center'>
            <img src={logo} alt={lang.header.logoAlt} className="w-20 h-20" />
            <Titres texte={clanName} className="-my-2"/>
          </Link>
          <Link to="/apropos">
            OKAY
          </Link>
          <div onClick={handleTest}>
            test
          </div>
        </div>
        <div className="flex gap-10 pe-10">
          {routes.map((route) => (
            <a key={route.title} href={route.href} className="font-bold text-lg">
              {route.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
