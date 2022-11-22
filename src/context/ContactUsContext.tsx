export {}

/* import { createContext, useContext, useState } from "react";
import { submitData, validate } from "../assets/scripts/Validation";
import { ContactUs } from "../models/contactModel";

export interface ContactUsContextType {
    errors: ContactUs[]
    submitted: ContactUs[]
    value: any

    handleChange: (e:React.FormEvent) => void
    handleSubmit: (e:React.FormEvent) => void
}

interface ContactUsProviderProps {
    children: any
}

export const ContactUsContext = createContext<ContactUsContextType | null>(null);

export const useContactUsContext = () => {
    return useContext(ContactUsContext)
}

export const ContactUsProvider = ({children}: ContactUsProviderProps) => {
    const [name, setName] = useState<string>('') 
    const [email, setEmail] = useState<string>('')
    const [comments, setComments] = useState<string>('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e:React.FormEvent) => {
        const {id, value}

        switch (id) {

            case 'name':
                setName(value) // man kallar på name i detta fall, informationen som skrivs in läggs in i value 
                break

            case 'email':
                setEmail(value)
                break

            case 'comments':
                setComments(value)
                break

            default:
                break
        }

        setErrors({...errors, [id]: validate(e)}) // genom att sätta in id så anropar man key i detta fall name, email och comment
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()  // stänger av standardbeteendet
        setErrors(validate[ContactUs, {name, email, comments}])
        
        if (errors.name === null && errors.email === null && errors.comments === null) {
            
            let json = JSON.stringify({name, email, comments}) // datan som skickas in görs om till json objekt 

            setName('')
            setEmail('')
            setComments('')
            setErrors({})

            if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json)) {
                setSubmitted(true)
            }
            else {
                setSubmitted(false)
            }
        } 
        else {
            setSubmitted(false)
        }
    }

    return (
        <ContactUsContext.Provider value={{ errors, setErrors, handleSubmit, handleChange }}>
            {children}
        </ContactUsContext.Provider>
    )
}

export default ContactUsProvider */