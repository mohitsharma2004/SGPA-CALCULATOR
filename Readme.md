# MyToken Solidity Contract

A simple Solidity contract to demonstrate basic token creation and management, including minting and burning tokens.

## Description

This project is a basic implementation of an ERC20-like token contract written in Solidity. The contract features public variables to store the token's details, a mapping to keep track of balances, and functions to mint and burn tokens. The project serves as an introduction to smart contract development on the Ethereum blockchain.

## Getting Started

### Installing

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/MyToken.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd MyToken
    ```
3. **Install dependencies** (if any).

### Executing program

1. **Compile the contract** using a Solidity compiler like `solc` or within an IDE like Remix.
2. **Deploy the contract** to an Ethereum testnet or local blockchain instance using a tool like Truffle or Remix.
3. **Interact with the contract**:
    - **Mint tokens**:
      ```solidity
      function mint(address _address, uint _number) public {
          totalSupply += _number;
          balances[_address] += _number;
      }
      ```

    - **Burn tokens**:
      ```solidity
      function burn(address _address, uint _number) public {
          if(balances[_address] >= _number) {
              totalSupply -= _number;
              balances[_address] -= _number;
          }
      }
      ```

## Help

For common issues or troubleshooting steps, refer to the following:

1. **Compiler errors**: Ensure you are using a compatible Solidity version (0.8.18 or higher).
2. **Deployment issues**: Verify network configurations and account balances.
3. **Transaction errors**: Check the gas limit and ensure the address has sufficient balance.

If you need further assistance, consult the Solidity documentation or community forums.

## Authors

Contributors names and contact info:

Mohd. Aftab Malik  

## License

This project is licensed under the MIT License.
