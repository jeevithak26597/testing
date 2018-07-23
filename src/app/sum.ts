export function sum(n)
{
    var i;
    var sum=0;
    if(n>=0){
    for(i=1;i<=n;i++)
        {
       sum=sum+i;
        }
        return sum;
}
else return 'invalid';

}