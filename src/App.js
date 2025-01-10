
import {Image} from "@chakra-ui/image";
import{Flex,Heading,Stack,Box,Text,List,ListItem} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
const App=() => {
  const [gameStarted, setGameStarted] = useState(false);

  const [selectedNumber, setSelectedNumber] = useState();

  const [dice,setDice] =useState(1);

  const [error,setError] =useState(null);

  const [score,setScore] =useState(null);

  const numbers =[1,2,3,4,5,6,7];

  const startGameHandler = () => {
    setGameStarted(true);
  };

 
  const onNumberClicked = (value) => {
    setSelectedNumber(value);
    setError(null);
  };

  const genRandamNo = () => {
    if (selectedNumber) { const genratedNo =Math.ceil(Math.random()*6);
      setDice(genratedNo);

    if(selectedNumber === genratedNo){
      setScore(prev => prev + genratedNo);
    }
    else{
      setScore(prev => prev - 2);
    }
    
    }
      else{
        setError("Please Select number");
      }
    
  };
  

  return(
    <>
    {gameStarted ?(
   <>
    <Stack justify="center" align="center" maxW="1300px" mx="auto" h="100vh" color={error ? "red" : "black"}>
      <Heading as="h1" fontSize="6xl" mb="8">{error ? error : "Select Number"}</Heading>
      <Flex pb="10">
       {numbers.map((value)=> <Flex justify="center"  align="center" h="50px" w="50px" bg={selectedNumber === value ? "green": "black"} color="white" fontFamily="2xl" key={value} mr={4} borderRadius="md" onClick={()=>onNumberClicked(value)}>{value}</Flex>)}
      </Flex>
      <Box h="150px" w="150px" onClick={genRandamNo}>
        {""}
        <Image src={`/dices(1-6)/dice${dice}.png`}/>
      </Box>
      <Text as="p" fontSize="xl">Click on dice to roll</Text>
      <Text color ={score>0 ? "green" : "red"} fontSize="8xl" fontWeight="bold">{score}</Text>
      <Text fontSize="6xl" fontWeight="bold">Total Score</Text>
      <Button onClick={()=> setScore(0)}>Reset Score</Button>
    </Stack>
    <Stack maxW="900px" mx="auto">
      <Heading>Game Rules:</Heading>
      <List>
        <ListItem>Select Number any number</ListItem>
        <ListItem>Click on dice image to roll it</ListItem>
        <ListItem>Select number is equals to obtained dice results then you will get same point of dice</ListItem>
        <ListItem>Select number is equals to obtained dice results then you will get same point of dice</ListItem>
        
      </List>
    </Stack>
  
   </>
   ) :(<Flex justify="center" align="center">
     <Image width="50%" src="/dices.png"/>
     <Stack>
       <Heading fontSize="7xl" as="h1">{""}The Dice Game</Heading>
       <Button alignSelf="flex-end" bg="black" color="white" hover={{bg:"grey"}} onClick={startGameHandler}>Start Game</Button> 
     </Stack>
    </Flex>)}
    </>
    );
};
export default App;