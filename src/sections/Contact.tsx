import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from 'react';
import Swal from 'sweetalert2';




const Contact = () => {

    const form = useRef<null | HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      emailjs.sendForm(
        'service_yck9jnk',
        'template_jzkk4lq',
        form.current!,
        'xCMMKBfVq5Lv8nrGb'
      )
         .then((result) => {
       console.log(result.text)
        
      }, (error) => {
          console.log(error.text);
      })
        .then( () => Swal.fire({
      
       title: "message sent successfully",
       timer: 1500,
      padding:0,
      icon: 'success',
       backdrop: true,
       width: '40%',
      heightAuto: false,     
      position:"bottom-right",
      grow: 'row',
        showConfirmButton: false,
      
    
    }
    ))
         
     
      form.current?.reset()
  };




  return (
    <div>
       
      <section className="text-gray-600 body-font relative h-full top-28 ">
        <div className="absolute inset-0 bg-gray-300">
                  <iframe className=" w-full  h-full contrast-[1.2] filter " title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15956.335827550623!2d35.8607008!3d-1.0993178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1698314184651!5m2!1sen!2ske " width={640} height={480}></iframe>

                 
                  
        </div>
              <div className="container px-5 py-24 mx-auto flex" >
          <form className="lg:w-1/3 md:w-1/2 bg-white dark:bg-[#141728] dark:text-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md " onSubmit={sendEmail} ref={form}>
            <h2 className=" text-lg mb-2 font-medium   font-palanquin title-font text-slate-gray text-center dark:text-white ">Feedback</h2>
             <p className="leading-relaxed mb-5 text-slate-gray font-montserrat text-center dark:text-white ">Write Us a Message</p>
            
            <label htmlFor="name" className="leading-7 text-sm bg-transparent font-montserrat">Name</label>
            <input type="text" name="user_name" className='className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"'  />
              
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-slate-gray  font-montserrat dark:text-white ">Email</label>
              <input type="email" id="email" name="user_email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600 font-montserrat ">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className=" py-2 px-6 font-montserrat rounded-full bg-coral-red text-lg">send</button>
         
          </form>
        </div>
      </section>
       
    </div>
  );
}

export default Contact;
