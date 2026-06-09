import { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [state,setState] = useState({name:'',email:'',message:'',status:''})
  async function send(e){
    e.preventDefault();
    setState(s=>({...s,status:'sending'}))
    try{
      await axios.post('/api/contact', { name: state.name, email: state.email, message: state.message })
      setState({name:'',email:'',message:'',status:'sent'})
    }catch(err){
      setState(s=>({...s,status:'error'}))
    }
  }
  return (
    <section id="contact" className="section container-wide py-16">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <div className="mt-6 max-w-xl">
        <form onSubmit={send} className="glass p-6 space-y-4">
          <input placeholder="Name" value={state.name} onChange={e=>setState(s=>({...s,name:e.target.value}))} className="w-full p-3 rounded bg-transparent border border-slate-700" />
          <input placeholder="Email" value={state.email} onChange={e=>setState(s=>({...s,email:e.target.value}))} className="w-full p-3 rounded bg-transparent border border-slate-700" />
          <textarea placeholder="Message" value={state.message} onChange={e=>setState(s=>({...s,message:e.target.value}))} className="w-full p-3 rounded bg-transparent border border-slate-700 h-32" />
          <div className="flex items-center gap-3">
            <button type="submit" className="bg-accent text-slate-900 px-4 py-2 rounded font-semibold">Send</button>
            <div className="text-slate-300">{state.status}</div>
          </div>
        </form>
        <div className="mt-4 text-slate-300">
          <div>LinkedIn: <a href="#" className="text-accent">/in/rohit</a></div>
          <div>GitHub: <a href="#" className="text-accent">/rohit-mahajan</a></div>
          <div>Email: rohit@email.com</div>
        </div>
      </div>
    </section>
  )
}
