// Obtener las preguntas del JSON
export function getQuestions(){
    try{
        const res = fetch('../Questions.json').then(
            response => {
                if (!response.ok) return null;
                return response.json();
            }
        )
        
    }
    catch(error){
        console.error("Error fetching questions:", error);
        return null;
    }
}