import React, { useEffect } from "react";
// Chakra imports
import {
	Flex,
	Button,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";

import CenteredModal from "components/CenteredModal/CenteredModal";
import Questions from "components/Questions/Questions";
import Intro from "components/Questions/Intro";
import Done from "components/Questions/Done";

const elements = [	
	{type:"scale", id:"rating", label:"How would you rate the above clip?"},
	{type:"radio", id:"valence", label:"Is the above clip Happy or Sad?", options:['Happy','Sad']},
	{type:"radio", id:"arousal", label:"Is the above clip Energetic or Slow?", options:['Energetic','Slow']},
	{type:"radio", id:"theme", label:"Do you think the clip had a general theme or did it seem random?", options:['Random','Themed']},
	// {type:"scale", id:"rating", label:"How random did the clip feel?", square:true},
]

function Survey() {
	
	const namePrev = localStorage.getItem("userName")

	const [values, setValues] = React.useState({name: namePrev?.length ? namePrev : undefined})
	const [userID, setUID] = React.useState({})
	const [name, setName] = React.useState()
	const [count, setCount] = React.useState(0)
	const [done, setDone] = React.useState(0)
	const [disable, setDisabled] = React.useState(false)
	const [audio, setAudio] = React.useState('//UAA')
	const toast = useToast()

	const { isOpen, onOpen, onClose } = useDisclosure()
	
	useEffect(() => {
		try {
			let userID = localStorage.getItem("userID")

			if(!userID?.length) {

				userID = ((Math.random() + 1)*1000).toString(36);
				localStorage.setItem("userID", userID)
			}
			
			setUID(userID)
		}
		catch (err) {
			console.error(err)
			toast({
				title: 'Error Connecting',
				description: "Please try again later",
				status: 'error',
				duration: 5000,
				isClosable: true,
			  })
		}


	}, []);

	// useEffect(() => {
	// 	if (isOpen) {
	// 		const timer = setTimeout(() => {
	// 			onClose();
	// 		}, 1000); 
	// 		return () => clearTimeout(timer)
	// 	}
	// }, [isOpen, onClose]);
	
	const handleSave = async () => {
		try {

			let obj = {}

			setDisabled(true)

			if (values.name) {
				localStorage.setItem("userName", values.name)
				// setName(values.name)

				const searchParams = new URLSearchParams(window.location.href.split('?')[1]);

				obj = { refLink: searchParams.get('r') }

				toast({
					title: "Let's Start",
					// description: "Let's try another clip",
					status: 'success',
					duration: 5000,
					isClosable: true,
				})
			}
			else if (done == 1) {
				toast({
					title: "Thanks",
					// description: "Let's try another clip",
					status: 'success',
					duration: 5000,
					isClosable: true,
				})
				setDone(2)
			} 
			else if (!name && !values.name) {
				setDisabled(false)
				return toast({
					title: 'Error',
					description: "Please enter your name",
					status: 'error',
					duration: 5000,
					isClosable: true,
				})
			}
			else {
				toast({
					title: 'Saved',
					description: "Let's try another clip",
					status: 'success',
					duration: 5000,
					isClosable: true,
				})
			}

			// onOpen()
			
			let res = await fetch('/api/response', {
				method: 'POST',                   // Specify the method
				headers: {
					'Content-Type': 'application/json'   // Set the content type to JSON
				},
				body: JSON.stringify({ ...values, uuid: userID, ...obj, })  // Convert the data to a JSON string
			})
			setCount(count+1)

			if (values.name) {
				setName(values.name)
				onOpen()
			}
			
			res = await (await fetch( '/api/question')).json()

			setValues({fileRef:res.fileRef})

			setAudio(res.file)
			setDisabled(false)
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			  });
		}
		catch (err) {
			console.debug(err)
			toast({
				title: 'Error Saving',
				// description: "We've created your account for you.",
				status: 'error',
				duration: 5000,
				isClosable: true,
			  })
		}
		
	}

	// console.debug(values)

	const handleChange = (id) => (value) => {
		try {
			// console.debug(id, value)
			setValues({
				...values,
				[id]: value
			})
		}
		catch (err) {
			console.error(err)
		}
	}

	return (
		<Flex position='center'>
		<Flex
		minH='100vh'
		h={{ base: "fit-content", lg: "fit-content" }}
		w='100%'
		maxW='1044px'
		mx='auto'
		pt={{ sm: "100px", md: "0px" }}
		flexDirection='column'
		me={{ base: "auto", lg: "auto", xl: "auto" }}>
		<Flex
		alignItems='center'
		justifyContent='start'
		style={{ userSelect: "none" }}
		// mx={{ base: "auto", lg: "unset" }}
		// ms={{ base: "auto", lg: "auto" }}
		// w={{ base: "100%", md: "50%", lg: "450px" }}
		px='50px'
		>
		<Flex
		direction='column'
		w='100%'
		background='transparent'
		mt={{ base: "20px", md: "150px", lg: "150px", xl: "150px" }}
		mb={{ base: "60px", lg: "95px" }}
		>
		
		{/* <Heading color={titleColor} fontSize='32px' mb='10px'>
			Nice to see you!
		</Heading> */}
	
	<>
	
	{ !done && !name?.length && <Intro handleChange={handleChange} values={values} setValues={setValues} /> }
	{ !done && name?.length && <Questions elements={elements} handleChange={handleChange} values={values} setValues={setValues} audioString={audio} count={count} setDone={setDone} /> }
	{ done && <Done elements={elements} handleChange={handleChange} values={values} setValues={setValues} audioString={audio} count={count} done={done} /> }

	<CenteredModal text={'Try another one...'} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
	
	</>
	
	{done != 2 && <Button
		// paddingTop="10px"
		variant='brand'
		fontSize='15px'
		onClick={handleSave}
		// type='submit'
		disabled={disable}
		w='100%'
		maxW='350px'
		h='45'
		mb='20px'
		mt='20px'>

		{done ? "SAVE" : "SAVE & NEXT"}

	</Button>}
	
	{count > 5 && !done && <Button
		// paddingTop="10px"
		variant='brand'
		fontSize='15px'
		onClick={() => setDone(true)}
		disabled={disable}
		// type='submit'
		w='100%'
		maxW='350px'
		h='45'
		mb='20px'
		mt='20px'>

		FINISH

	</Button>}
	
	
	</Flex>
	</Flex>
	</Flex>
	</Flex>
	);
}

export default Survey;
