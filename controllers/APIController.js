const APIController = {
    alldata: async(req, res) => {
        try{
            return res.json({ Status: "Success all data"})
        }
        catch(err){
            console.log(err)
        }
    },
    onedata: async(req, res) => {
        try{
            return res.json({ Status: "Success one Data"})
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = APIController;