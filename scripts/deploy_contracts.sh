# Replace build folder with most recent artifacts
rm build/contracts/*
cp artifacts/json/* build/contracts/

# Re-compile all contracts
truffle compile --all

# Deploy contracts onto network TODO: specify network
truffle migrate --reset

# Replace production artifacts with newly generated json artifacts
rm artifacts/json/*
cp build/contracts/* artifacts/json/

# Remove previous transpiled artifacts from artifacts dir
rm artifacts/ts/*

# Transform raw JSON artifacts into Typescript modules
for filename in build/contracts/*.json; do
    filename_base=$(basename $filename .json)
    echo -e "export const $filename_base = " > "artifacts/ts/$filename_base.ts"
    cat "build/contracts/$filename_base.json" >> "artifacts/ts/$filename_base.ts"

    echo -e "Transpiled $filename_base.json into $filename_base.ts"
done

echo -e "Successfully deployed contracts onto network"