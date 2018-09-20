# Remove old dist directory
rm -rf ./dist

# Transpile typescript into javascript usinf dist configuration
tsc --p tsconfig.dist.json