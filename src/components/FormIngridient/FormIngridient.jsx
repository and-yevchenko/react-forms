import { useFieldArray, useForm } from 'react-hook-form'
import '../../assets/Form.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../Input/Input'
import { ingridientSchema } from './ingridientSchema'

export const FormIngridient = () => {

    const { 
        register, 
        handleSubmit,
        control,
        formState: {
            errors,
        },
    } = useForm({
        defaultValues: {
            ingridients: [],
            title: '',
        },
        resolver: zodResolver(ingridientSchema),
    })

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'ingridients'
    })

    const onSubmit = (formSchema) => console.log(formSchema)

    return (
        <form className='form-ingridient' onSubmit={handleSubmit(onSubmit)}>
            <Input 
            register={register('title')}
            errorMessage={errors.title?.message}
            label = 'Title'
            />
            {fields.map((el, index) => (
                <div className='ingridients' key={el.id}>
                    <Input register={register(`ingridients.${index}.name`)}/>
                    <Input register={register(`ingridients.${index}.qty`, {valueAsNumber: true})} type='number'/>
                    <select {...register(`ingridients.${index}.unit`)}>
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                    </select>
                    <button onClick={() => remove(index)} type='button'>
                        Remove
                    </button>
                </div>
            ))}
            <button onClick={() => append({ name: '', qty: 0, unit: 'g' })} type='button'>
                Add ingridients
            </button>
            <button>save</button>
        </form>
    )
}