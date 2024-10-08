import React from "react";

interface CreateNewGroupChatProps {
    pfp: string;
    name: string;
    selectState: boolean;
    onSelect: () => void;
}

// TODO: Have checkmark svg be included when checkbox is ticked
const CreateNewGroupChatCard: React.FC<CreateNewGroupChatProps> = ({pfp, name, selectState}) => {
    return (
        <div className="flex items-center p-4"> 
            <img src={pfp} alt={name} className="rounded-full w-8 h-8 border-2 border-spotify-green object-cover" />
            <div className="w-1/2 ml-4">
                <h4 className="text-white font-bold">{name}</h4>
            </div>
            <input type="checkbox" name="Checkbox" className="custom-checkbox ml-10" />
        </div>
    );
};

export default CreateNewGroupChatCard