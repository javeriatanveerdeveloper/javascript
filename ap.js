alert('THANKYOU! for choosing JS pizza deliveries.');
console.log('THANKYOU! for choosing JS pizza deliveries.');

let size=prompt('what size of pizza you want? (S / M / L)').toUpperCase();
let bill=0;

// pizza size
if(size==='S')
{
    console.log('Small pizza is of $15');
    bill=15;
}
else if(size==='M' )
{
    console.log('Medium pizza is of $20');
    bill=20;
}
else if(size==='L' )
    {
        console.log('large pizza is of $25');
        bill=25;
    }
else{
    console.log(`Please enter 'S' for small size , 'M' for medium size and 'L' for large size `);
    
}
    //pepperoni cost

    let pepperoni=prompt('Add pepperoni? (Y / N)').toUpperCase();
    if (pepperoni==='Y' && size=== 'M')
         {
        console.log('pepperoni cost= $3');
        bill+=3;
        }
        else if( pepperoni==='Y' && size=== 'L')
        {
            console.log('pepperoni cost= $3');
            bill+=3;
        }
        else if(pepperoni==='Y' && size=== 'S')
        {
            console.log('pepperoni cost= $2');
        bill+=2;
        }
        else if(pepperoni==='N')
            {
            bill+=0;
            }
        else{
            console.log(`Please enter 'y' for YES and 'N' for NO `);
        }

        // cheese cost
        let extraCheese=prompt('Add Extra cheese? (Y / N)').toUpperCase();
     if (extraCheese==='Y') 
        {
            console.log('Extra Cheese cost= $1');
             bill+=1
        }
       else if (extraCheese==='N') 
            {
               
                 bill+=0;
            }
        else{
            console.log(`Please enter 'y' for YES and 'N' for NO `);
        }
        
console.log(`Your total bill is $${bill} `);
