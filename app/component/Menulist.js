import React from 'react'
import { Menu } from '@headlessui/react'


function Menulist() {
  return (
    <>
    <a
      href="#"
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
      Add Item
    </a>
   

    
      
      <Menu>
          <Menu.Button>More</Menu.Button>
          <Menu.Items>
            <Menu.Item>
              {({ active }) => (
                <a
                className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Documentation
                </a>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </>
      )
    }
  


export default Menulist
              