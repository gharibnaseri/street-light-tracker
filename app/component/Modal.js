import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Input from './Input'

export default function MyModal({ children, title, description, type }) {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}


            {/* X */}




            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            {description}
                                        </p>
                                    </div>
                                    <br />
                                        <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">

                                        <Input label='X:' labelClassName='block text-sm font-semibold leading-6 text-gray-900'  inputType='text' divClassName='mt-1' placeholder='Latitude' />

                                        <Input label='Y:' labelClassName='block text-sm font-semibold leading-6 text-gray-900'  inputType='text' placeholder='Longitude' />

                                        <Input label='Title:' labelClassName='block text-sm font-semibold leading-6 text-gray-900' inputType='text' divClassName='mt-1 col-span-2'/>

                                        <Input label='Description:' labelClassName='block text-sm font-semibold leading-6 text-gray-900' inputType='text' divClassName='mt-1 col-span-2' />

                                            {/* <div>
                                                <label htmlFor="X" className="block text-sm font-semibold leading-6 text-gray-900">
                                                    X:
                                                </label>
                                                <div className="mt-2.5">
                                                    <input
                                                        type="text"
                                                        name="X"
                                                        id="X"
                                                        autoComplete="given-name"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="Y" className="block text-sm font-semibold leading-6 text-gray-900">
                                                    Y:
                                                </label>
                                                <div className="mt-2.5">
                                                    <input
                                                        type="text"
                                                        name="Y"
                                                        id="Y"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Title:
                                            </label>
                                            <div className="mt-1 col-span-2">
                                                <input
                                                    type="text"
                                                    name="Title"
                                                    id="Title"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <label htmlFor="title" className="block text-sm font-semibold leading-2 text-gray-900">
                                                Description:
                                            </label>
                                            <div className="mt-1 col-span-2">
                                                <input
                                                    type="text"
                                                    name="description"
                                                    id="discription"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div> */}
                                        </div>


                                    </div>


                                    

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
