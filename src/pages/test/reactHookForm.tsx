import Checkbox from '@mui/material/Checkbox'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

// 1.
type MyFormData = {
    firstName: string
    lastName: string
    category: string
};

export default function App() {
    const { register, handleSubmit, formState: { errors },} = useForm<MyFormData>()
    const onSubmit: SubmitHandler<MyFormData> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName', { required: true })} placeholder='이름' />
            {errors.firstName && <div>이름을 입력해 주십시오</div>}
            <input {...register('lastName', { required: true })} placeholder='성' />
            {errors.lastName && <div>성을 입력해 주십시오</div>}
            <select {...register('category', { required: true })}>
                <option value="">선택...</option>
                <option value="A">카테고리 A</option>
                <option value="B">카테고리 B</option>
            </select>
            {errors.category && <div>카테고리를 선택해 주십시오</div>}
            <input type="submit" />
        </form>
    )
}

// 2. Controller를 사용해 외부에서 정의한 Checkbok컴포넌트에 밸리데이션 기능 추가
type MyFormData2 = {
    isChecked: boolean
};

export function App2() {
    const { handleSubmit, control, formState: { errors },} = useForm<MyFormData2>()
    const onSubmit: SubmitHandler<MyFormData2> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="isChecked"
                control={control}
                defaultValue={false}
                rules={{required: true}}
                render={({field: {onChange, value}}) => <Checkbox onChange={onChange} value={value} />}
            />
            {errors.isChecked && <label>체크해 주십시오</label>}
            <input type="submit" />
        </form>
    )
}