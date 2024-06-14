import { useParams } from 'react-router-dom'

export default function DashboardPage() {
    const { pathParam } = useParams();
    console.log(pathParam);

    return (
        <div className="h-screen w-full bg-red-600 text-white">
            <h1>{pathParam}</h1>
        </div>
    );
}