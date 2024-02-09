export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id} = req.params;

    } catch (error) {
        console.log("Error in sendMessage controller",error)
        res.status(400).json({error:"Internal server error!"})
    }
}