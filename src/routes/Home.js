import { dbService } from "fbase";
import { useEffect, useState } from "react";

const Home = () => {
    const [minv, setMinv ] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("minv").add({
            text: minv,
            createdAt: Date.now()
        })
        setMinv("");
    }
}

export default Home;