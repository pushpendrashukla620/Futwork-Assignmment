
const fs = require('fs');
const csv = require('csv-parser');

const uniqeMobileUser = async (req, res,) => {

    try {
        let processed = [];
        let unprocessed = [];
        let iter = 0;
        let set = new Set();
        fs.createReadStream('data.csv')
            .pipe(csv())
            .on('data', function (row) {
                set.add(row.mobile)
                if (iter == set.size) {
                    unprocessed.push(row);
                }
                else {
                    processed.push(row)
                    iter += 1
                }
                data = { processed,unprocessed };

            })
            .on('end', function () {


                return res.status(200).json({ data });
                

            })

    }
    catch (error) {
        console.log(error);
        return res.status(404).json("error Occured Please ckeck console" );


    }
};
module.exports = uniqeMobileUser


