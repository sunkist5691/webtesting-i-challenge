const enhancer = require('./enhancer.js');

// let item, itemTwo
// beforeEach(() => {
//    item = { name: 'Ronaldo', durability: 100, enhancement: 10 }
//    itemTwo = { name: 'Messi', durability: 50, enhancement: 20 }
// })
// beforeEach() runs before every single test.

describe('Test Enhancer', () => {

   const item = { name: 'Ronaldo', durability: 100, enhancement: 10 }
   const itemTwo = { name: 'Messi', durability: 50, enhancement: 20 }
   const itemThree = { name: 'Suarez', durability: 90, enhancement: 15 }

   describe('test repair() function', () => {
      it('exist', () => {
         expect(enhancer.repair).toBeDefined()
      })

      it('returns an object', () => {
         expect(enhancer.repair(item)).toBeInstanceOf(Object)
      })

      it('returns an object with a name, durability, enhancement props', () => {
         expect(enhancer.repair(item)).toHaveProperty('name')
         expect(enhancer.repair(item)).toHaveProperty('durability')
         expect(enhancer.repair(item)).toHaveProperty('enhancement')
      })

      it('returns an object with a durability equal to 100', () => {
         expect(enhancer.repair(item)).toMatchObject({ durability: 100 })
      })
   })

   describe('test success() function', () => {
      it('exist', () => {
         expect(enhancer.success).toBeDefined()
      })

      it('returns an object', () => {
         expect(enhancer.success(item)).toBeInstanceOf(Object)
      })

      it('returns an object with a name, durability, enhancement props', () => {
         expect(enhancer.success(item)).toHaveProperty('name')
         expect(enhancer.success(item)).toHaveProperty('durability')
         expect(enhancer.success(item)).toHaveProperty('enhancement')
      })

      it('returns an object a property enhancement increases by 1', () => {
         expect(enhancer.success(item)).toMatchObject({ enhancement: 11 })
      })

      it('returns an object a property enhancement is equal to 20',() => {
         expect(enhancer.success(itemTwo)).toMatchObject({ enhancement: 20 })
      })
   })

   describe('test fail() function', () => {
      it('exist', () => {
         expect(enhancer.fail).toBeDefined()
      })

      it('returns an object', () => {
         expect(enhancer.fail(item)).toBeInstanceOf(Object)
      })

      it('returns an object with a name, durability, enhancement props', () => {
         expect(enhancer.fail(item)).toHaveProperty('name')
         expect(enhancer.fail(item)).toHaveProperty('durability')
         expect(enhancer.fail(item)).toHaveProperty('enhancement')
      })

      it('returns an object/ enhancement decreased by 5 when enhancement is below 15', () => {
         expect(enhancer.fail(item)).toMatchObject({ durability: 95 })
      })

      it('returns an object/ durability decreased by 10 when enhancement is greater or equal to 15', () => {
         expect(enhancer.fail(itemThree)).toMatchObject({ durability: 80 })
      })

      it('returns an object/ enhancement decreased by 1 when enhancement is ', () => {
         expect(enhancer.fail(itemTwo)).toMatchObject({ enhancement: 19 })
      })
   })
})


/* 
### Task 2: Minimum Viable Product

After a set of interviews with the potential users of the solution, we gathered the following information about the functionality of the game's enhancing system. Your job is to add tests to `./enhancing/enhancer.spec.js` and code to `./enhancing/enhancer.js` to implement the requirements; `./enhancing/enhancer.js` exports an object that has the following methods:

- a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.
- a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.
- a `fail(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement failure.
- a `get()` method for use when working on the stretch problem.

The following sections list information provided by the client about `items` and the game's enhancing system.

### Items

- Items have `name`, `durability` and `enhancement`.
- The item's `enhancement` it's a number from 0 to 20.
- The item's `durability` it's a number from 0 to 100.

### When enhancement succeeds

- The item's enhancement increases by 1.
- If the item enhancement level is 20, the enhancement level is not changed.
- The durability of the item is not changed.

### When enhancement fails

- If the item's enhancement is less than 15, the durability of the item is decreased by 5.
- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17). 
*/