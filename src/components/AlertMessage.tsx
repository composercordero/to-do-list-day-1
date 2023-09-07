import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import CategoryType from './global/types/CategoryType'

type AlertProps = {
    category: CategoryType,
    message: string|null,
    title: string|null
}
const AlertMessage = ({message, title, category}: AlertProps) => {
  return (
    <Alert severity={category} onClose={() => {}}>
        <AlertTitle>
            {title}
        </AlertTitle>
        {message}
    </Alert>  
    )
}
export default AlertMessage