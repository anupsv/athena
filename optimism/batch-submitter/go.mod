module github.com/ethereum-optimism/optimism/batch-submitter

go 1.18

replace github.com/ethereum-optimism/optimism/bss-core v0.0.0 => ../bss-core

replace github.com/ethereum-optimism/optimism/l2geth v0.0.0 => ../l2geth

require (
	github.com/ethereum-optimism/optimism/bss-core v0.0.0
	github.com/ethereum-optimism/optimism/l2geth v0.0.0
	github.com/ethereum/go-ethereum v1.10.26
	github.com/getsentry/sentry-go v0.12.0
	github.com/prometheus/client_golang v1.11.0
	github.com/stretchr/testify v1.7.2
	github.com/urfave/cli v1.22.5
)
