
import * as jwt from 'jsonwebtoken';


const id = 777;
var token = jwt.sign({ id }, process.env.SECRET);
