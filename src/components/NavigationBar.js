import React, { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Cross } from 'hamburger-react';
import { routes } from '../routes.js';
import { motion } from 'framer-motion';
import { getClan } from '../services/clanService.js';
import Titres from './Titres.js';

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

  return (
    <div>
      <div className="lg:hidden">
        <div ref={ref} className="relative">
          <div className="flex justify-between items-center p-4">
            <div className='flex items-center'>
              <img src={logo} alt="Clan Logo" className="w-20 h-20" />
              <div>
                <Titres texte="Les Légendaires" className="-my-2"/>
              </div>
            </div>
            <div className="ml-auto">
              <Cross label="Show menu" toggled={isOpen} rounded size={30} toggle={setOpen} easing="ease-in" />
            </div>
          </div>

          {isOpen && (
            <motion.div 
              className="inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10
              fixed left-0 shadow-4xl right-0 top-[6.5rem] p-5 pt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="grid gap-2">
                {routes.map((route) => {
                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      key={route.title}
                      className="w-full">
                      <a
                        onClick={() => setOpen((prev) => !prev)}
                        className={
                          "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-200/60 backdrop-blur-sm"
                        }
                        href={route.href}
                      >
                        <span className="flex m-auto gap-1 font-bold text-lg">{route.title}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
      <div>
        <div className="hidden lg:flex justify-between items-center p-4">
          <div className='flex items-center'>
            <img src={logo} alt="Clan Logo" className="w-20 h-20" />
            <Titres texte="Les Légendaires" className="-my-2"/>
          </div>
          <div className="flex gap-10 pe-10">
            {routes.map((route) => {
              return (
                <a key={route.title} href={route.href} className="font-bold text-lg">
                  {route.title}
                </a>
              );})}
          </div>                
        </div>  
      </div>
    </div>
    
    
  );
}

export default NavigationBar;
