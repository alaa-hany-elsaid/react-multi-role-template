import {useSelector} from "react-redux";
import GuestLayout from "./layout/guest.jsx";
import {Login} from "./pages/guest/login.jsx";

function App() {

    const is_auth = useSelector((state) => state.auth.is_authenticated)
    const role = useSelector((state) => state.auth.user_data.role)

    return <GuestLayout>
        <Login/>
    </GuestLayout>;


}

export default App
