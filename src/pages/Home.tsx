import { Checkbox } from '../components/Checkbox'
import { ImageSquare } from "phosphor-react";
import { Button } from "../components/Button";
import { InputFile } from "../components/InputFile/index"
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { useEffect, useState } from "react";
import { CNCLoader } from '../components/Loader';
import svgcode from 'svgcode';
import {GCodeViewer} from "react-gcode-viewer";

export interface IFile {
	lastModified: number;
	lastModifiedDate: Date;
	name: string;
	size: number;
	type: string;
	webkitRelativePath: string;
}

export function Home(){
    const [disabled, setDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState<IFile>({} as IFile);

    const handleChangeImage = (event: any) => {
        setIsLoading(true);
        console.log(event)
		const file = event?.target?.files[0];
		if (file?.size > 0) {
			setImage(file);
		}
        setIsLoading(false);
	};

    useEffect(() => {
        if (image.size > 0) {
            const gcode = svgcode()
                .loadFile(__dirname + "test/helloworld.svg")
                .generateGcode()
                .getGcode();
                console.log(gcode)
        }
    },[image])


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

                <Text size="lg" className="text-gray-400 mt-1">
                Escolha a imagem para executar
                </Text>
            </header>
            <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
            { isLoading ? <CNCLoader/> 
                : <>
                    <label htmlFor="email" className="flex flex-col gap-3">
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
                        accept=".jpg, .png,"
                        type="file"
                        className="file-input"/>

                    <Button onClick={handleChangeImage} disabled={disabled} className="mt-4">Executar</Button>
                    </>
            }
            {/* <GCodeViewer
            orbitControls
            showAxes
            style={style}
            url={url}
        /> */}
                </form>
            
            <footer className="flex flex-col items-center gap-4 mt-8">
                <Text asChild size="sm">
                <a href="" className="text-gray-400 underline hover:text-gray-200">Configurar conexão com o Arduino</a>
                </Text>
            </footer>
        </div>
    )
}