namespace SpriteKind {
    export const Interface = SpriteKind.create()
}
let Player1 = sprites.create(assets.image`Player`, SpriteKind.Player)
let Enemy1 = sprites.create(assets.image`Player`, SpriteKind.Enemy)
let Store = sprites.create(assets.image`Player`, SpriteKind.Interface)
