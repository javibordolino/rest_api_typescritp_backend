import { connectDB } from "../server";
import db from "../config/db";

 jest.mock('../config/db')

 describe('connectDB', () => {
    it('Should handle database connection error', async () => {
        jest.spyOn(db, 'authenticate').mockRejectedValueOnce(new Error('Hubo un error al conectarse a la BD'))
        const consoleSpy = jest.spyOn(console, 'log')

        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Hubo un error al conectarse a la BD')
        )
    })
 })