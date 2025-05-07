// Obtener las preguntas del JSON
export async function getQuestions(){
    try{
        const response = await fetch('/Questions.json');
        if(!response.ok) return null;
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error("Error fetching questions:", error);
        return null;
    }
}