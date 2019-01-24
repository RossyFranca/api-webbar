
import * as jwt from 'jsonwebtoken';
import { Config } from './utils/config';

var config = new Config();

const id = 777;
var token = jwt.sign({ id }, config.SECRET);
console.log(token)