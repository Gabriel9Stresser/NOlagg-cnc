import { Checkbox } from '../components/Checkbox'
import { ImageSquare, PlugsConnected } from "phosphor-react";
import { Button } from "../components/Button";
import { InputFile } from "../components/InputFile/index"
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { useEffect, useState } from "react";
import { CNCLoader } from '../components/Loader';
import {GCodeViewer} from "react-gcode-viewer";
import fileToBase64 from '../utils/fileToBase64';
import axios from 'axios';

export interface IFile {
	lastModified: number;
	lastModifiedDate: Date;
	name: string;
	size: number;
	type: string;
	webkitRelativePath: string;
}

const client = axios.create({
    baseURL: "http://localhost:3000" 
  });

export function Home(){
    const [disabled, setDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState<IFile>({} as IFile);
    const [serialPort, setSerialPort] = useState<string>('');
    const [base64, setDocBase64] = useState<string>('');

    const handleChangeImage = async (event: any) => {
        setIsLoading(true);
		const file = event?.target?.files[0];
		if (file?.size > 0) {
			setImage(file);
            const image = await fileToBase64(file);
		    setDocBase64(image);
		}
        setDisabled(false);
        setIsLoading(false);
	};

    const executeGcode = async (event: any) => {
        setIsLoading(true);
        const postPort = await axios.post("http://localhost:3000/gcode/port", { image: base64, port: 'COM3'});
        console.log(postPort)
        if (postPort.status !== 201) setIsLoading(false);

        await axios.post("http://localhost:3000/gcode");
        setIsLoading(false);
	};

    const url = "https://storage.googleapis.com/ucloud-v3/6127a7f9aa32f718b8c1ab4f.gcode"

    const style = {
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
    }

    return (
        <div className="w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100">
            <header className="flex flex-col items-center">
                <Logo />
            
                <Heading size="lg" className="mt-4">
                CNC - NO LAGG
                </Heading>
            </header>
            <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
            { isLoading ? <CNCLoader/> 
                : <>
                    <Text size="lg" className="text-gray-400 mt-1">
                    Escolha a imagem para executar
                    </Text>
                    <label htmlFor="serialPort" className="flex flex-col gap-3">
                        <Text className="font-semibold">Porta Serial</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                            <PlugsConnected />
                            </TextInput.Icon>

                            <TextInput.Input placeholder={serialPort ? serialPort : 'COM3 ou COM4'}/>
                        </TextInput.Root>
                    </label>
                    <label htmlFor="image" className="flex flex-col gap-3">
                        <Text className="font-semibold">Nome da imagem</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                            <ImageSquare />
                            </TextInput.Icon>

                            <TextInput.Input disabled placeholder={image.name ? image.name : 'Nome da imagem'}/>
                        </TextInput.Root>
                    </label>

                    <InputFile 
                        onChange={handleChangeImage} 
                        placeholder="Importar imagem"
                        accept=".jpeg, .jpg, .png"
                        type="file"
                        className="file-input"/>

                    <Button onClick={executeGcode} disabled={disabled}>Executar</Button>
                    </>
            }
            {/* <GCodeViewer
            orbitControls
            showAxes
            style={style}
            url={url}
        /> */}
                </form>
        </div>
    )
}