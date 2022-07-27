| **Object**      	| **Properties**                   	| **Message**                     	| **Output**    	|   	|
|-----------------	|----------------------------------	|---------------------------------	|---------------	|---	|
| **Statement**   	| print@array[string]              	| printStatement()                	| Array         	|   	|
|                 	|                                  	| printHeader()                   	| String        	|   	|
| **Transaction** 	| Type[string]                     	| getType()                       	| String        	|   	|
|                 	|                                  	| isCredit()                      	| String,Number 	|   	|
|                 	|                                  	| isDebit()                       	| String,Number 	|   	|
|                 	| Date[string]                     	| getDate()                       	| String        	|   	|
|                 	| Amount[num]                      	| getAmount()                     	| Number        	|   	|
|                 	| transactionBalance[num]          	| getTransactionBalance()         	| Number        	|   	|
|                 	|                                  	| setTransactionBalance()         	|               	|   	|
| **Account**     	| balance[num]                     	| getBalance()                    	| Number        	|   	|
|                 	|                                  	| setBalance()                    	|               	|   	|
|                 	|                                  	| makeTransaction()               	|               	|   	|
|                 	| ListOfTransactions@array[string] 	| getListOfTransactions()         	| Array         	|   	|
|                 	|                                  	| addToListOfTransactions()       	|               	|   	|
|                 	|                                  	|                                 	|               	|   	|