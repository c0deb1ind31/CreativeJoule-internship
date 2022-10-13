
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.16;

contract NexusMarketplace {
    uint256 public productCount = 0;
    mapping(uint256 => Product) public products;

    struct Product {
        uint256 id;
        string name;
        string figmaId;
        uint256 price;
        address payable owner;
        bool purchased;
    }

    event ProductCreated(
        uint256 id,
        string name,
        string figmaId,
        uint256 price,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint256 id,
        string name,
        string figmaId,
        uint256 price,
        address payable owner,
        bool purchased
    );

    function createProduct(string memory _name,string memory _figmaId ,uint256 _price) public {
        require(bytes(_name).length > 0);
        require(_price > 0); 
        productCount++;
        products[productCount] = Product(
            productCount,
            _name,
            _figmaId,
            _price,
            msg.sender,
            false
        );
        emit ProductCreated(productCount, _name,_figmaId, _price, msg.sender, false);
    }

    function purchaseProduct(uint256 _id) public payable {
        Product memory _product = products[_id];
        address payable _seller = _product.owner;
        require(_product.id > 0 && _product.id <= productCount);
        require(msg.value >= _product.price);
        require(!_product.purchased);
        require(_seller != msg.sender);

        _product.owner = msg.sender;
        _product.purchased = true;
        
        products[_id] = _product;
        address(_seller).transfer(msg.value);
        emit ProductPurchased(
            productCount,
            _product.name,
            _product.figmaId,
            _product.price,
            msg.sender,
            true
        );
    }
}
