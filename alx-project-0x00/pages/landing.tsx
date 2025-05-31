import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <p className="bg-red-300 bold">Test</p>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <div>
                <h1 className="text-2xl font-bold mb-6">Custom Buttons</h1>
                {/* Small Buttons */}
                <Button title="Small - rounded-sm" styles="bg-blue-400 text-black px-3 py-1 text-sm border rounded-sm" />
                <Button title="Small - rounded-md" styles="bg-blue-600 px-3 py-1 text-sm rounded-md" />
                <Button title="Small - rounded-full" styles="bg-blue-600 px-3 py-1 text-sm rounded-full" />

                {/* Medium Buttons */}
                <Button title="Medium - rounded-sm" styles="bg-green-600 px-4 py-2 text-base rounded-sm" />
                <Button title="Medium - rounded-md" styles="bg-green-600 px-4 py-2 text-base rounded-md" />
                <Button title="Medium - rounded-full" styles="bg-green-600 px-4 py-2 text-base rounded-full" />

                {/* Large Buttons */}
                <Button title="Large - rounded-sm" styles="bg-red-600 px-6 py-3 text-lg rounded-sm" />
                <Button title="Large - rounded-md" styles="bg-red-600 px-6 py-3 text-lg rounded-md" />
                <Button title="Large - rounded-full" styles="bg-red-600 px-6 py-3 text-lg rounded-full" />

            </div>
        </div>
    )
}

export default Landing;