from orm import models, fields

class Products(models.Model):
    _name = 'product.product'

    name = fields.Char(string="Name")
    price = fields.Integer("Price")
    size = fields.Char("Size")
    brand = fields.Char("Brand")
    unit = fields.Integer("Unit")
    description = fields.Char("Description")
    expired = fields.Date("Expired")
    image_url = fields.Char("Image URL")

models.register(Products)