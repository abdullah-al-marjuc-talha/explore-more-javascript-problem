for(let i = 1; i <=50; i++)
{
    // console.log(i);


    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log('foobar');
    }
    if(i % 3 == 0)
    {
        console.log('foo');
    }
    else if(i % 5 == 0)
    {
        console.log('bar');
    }

    else if(i % 3 == 0)
    {
        console.log('foo');
    }

    else
    {
        console.log(i);
    }

}