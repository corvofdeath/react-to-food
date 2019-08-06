import * as foods from '../assets/data/foods';
import { Food } from '../redux/cart/types.js';

class DataService {
	private readonly foods: Food[];

	constructor () {
		this.foods = foods;
	}

	get foodList () {
		return this.foods;
	}
}

const singleton = new DataService();
export default singleton;
