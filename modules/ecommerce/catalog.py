from orm import models, fields

class ProductCatalog(models.Model):

    name = fields.Char(string="Catalog Name")
    description = fields.Char("Catalog Description")
    image_url = fields.Char("Catalog Image URL")

models.register(ProductCatalog)
