#ifndef FLATGEOBUF_PACKEDRTREE_H_
#define FLATGEOBUF_PACKEDRTREE_H_

#include <cmath>
#include <numeric>

#include "flatbuffers/flatbuffers.h"

namespace FlatGeobuf {

struct Node {
    double minX;
    double minY;
    double maxX;
    double maxY;
    uint64_t index;
    uint64_t offset;
    double width() const { return maxX - minX; }
    double height() const { return maxY - minY; }
    static Node sum(Node a, const Node& b) {
        a.expand(b);
        return a;
    }
    static Node create(uint64_t index = 0);
    void expand(const Node& r);
    bool intersects(const Node& r) const;
    std::vector<double> toVector();
};

struct Item {
    Node node;
};

std::ostream& operator << (std::ostream& os, Node const& value);

uint32_t hilbert(uint32_t x, uint32_t y);
uint32_t hilbert(const Node& n, uint32_t hilbertMax, const Node& extent);
void hilbertSort(std::vector<std::shared_ptr<Item>> &items);
void hilbertSort(std::vector<Node> &items);
Node calcExtent(const std::vector<std::shared_ptr<Item>> &items);
Node calcExtent(const std::vector<Node> &rects);

/**
 * Packed R-Tree
 * Based on https://github.com/mourner/flatbush
 */
class PackedRTree {
    Node _extent;
    Node *_nodes = nullptr;
    uint64_t _numItems;
    uint64_t _numNodes;
    uint16_t _nodeSize;
    std::vector<std::pair<uint64_t, uint64_t>> _levelBounds;
    //std::vector<uint64_t> _levelOffsets;
    void init(const uint16_t nodeSize);
    static std::vector<std::pair<uint64_t, uint64_t>> generateLevelBounds(const uint64_t numItems, const uint16_t nodeSize);
    static std::vector<uint64_t> generateLevelOffsets(const uint64_t numItems, const uint16_t nodeSize);
    void generateNodes();
    void fromData(const void *data);
public:
    ~PackedRTree() {
        if (_nodes != nullptr)
            delete[] _nodes;
    }
    PackedRTree(const std::vector<std::shared_ptr<Item>> &items, const Node& extent, const uint16_t nodeSize = 16);
    PackedRTree(const std::vector<Node> &nodes, const Node& extent, const uint16_t nodeSize = 16);
    PackedRTree(const void *data, const uint64_t numItems, const uint16_t nodeSize = 16);
    std::vector<uint64_t> search(double minX, double minY, double maxX, double maxY) const;
    static std::vector<Node> streamSearch(
        const uint64_t numItems, const uint16_t nodeSize, const Node& n,
        const std::function<void(uint8_t *, size_t, size_t)> &readNode);
    uint64_t size() const;
    static uint64_t size(const uint64_t numItems, const uint16_t nodeSize = 16);
    Node getExtent() const;
    void streamWrite(const std::function<void(uint8_t *, size_t)> &writeData);
};

}

#endif
